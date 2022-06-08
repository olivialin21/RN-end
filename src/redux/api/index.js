import axios from "axios"
import jsSHA from "jssha"

const getAuthorizationHeader = function() {
	let AppID = "1df2110c12ab4cd68d3cf8de5398a44e";
	let AppKey = "QqVw0g74_brVr1wAJtCJt4yp16w";

	let GMTString = new Date().toGMTString();
	let ShaObj = new jsSHA('SHA-1', 'TEXT');
	ShaObj.setHMACKey(AppKey, 'TEXT');
	ShaObj.update('x-date: ' + GMTString);
	let HMAC = ShaObj.getHMAC('B64');
	let Authorization = `hmac username="${AppID}", algorithm="hmac-sha1", headers="x-date", signature="${HMAC}"`;

	return { 'Authorization': Authorization, 'X-Date': GMTString};
}

export const getBikeStations = async ( location, filter ) => {
  return await axios.get(`https://ptx.transportdata.tw/MOTC/v2/Bike/Station/NearBy?%24spatialFilter=nearby(${location.latitude}%2C%20${location.longitude}%2C%20250)&%24format=JSON`,
  {
     headers:getAuthorizationHeader()
  });
}