import {
  IP
} from "@/core/config/const";
export const services = {
  login: `http://${IP}/chzuHouse/user/login`,
  streetquery: `http://${IP}/chzuHouse/facilities/getFacilities`,
  compare: `http://${IP}/chzuHouse/querylessdistance/querylesshospitaldistance`,
  houseQuery: `http://${IP}//chzuHouse/queryHouseInfo/queryHouseInfoPoint`,
  companyQuery: `http://${IP}//chzuHouse/government/queryGovernmentPoint`,
  selectHouse: `http://${IP}//chzuHouse/queryHouseInfo/multiConditionalQuery`,
  queryurb: `http://${IP}//chzuHouse/urbanfacilities/queryurbanfacilities`,
  autoStreet: `http://${IP}//chzuHouse/statistical/queryStatisticalByPloygon`,
  getHouse: `http://${IP}//chzuHouse/queryHouseInfo/queryHouseByBufferArea`,
  register: `http://${IP}//chzuHouse/login/registered`,
  changePsd: `http://${IP}//chzuHouse/login/modifyUser`,
  getallinfo: `http://${IP}//chzuHouse/queryHouseInfo/queryHouseDetails`,
  rightHouseInfo: `http://${IP}//chzuHouse/queryHouseInfo/queryHouseSorting`,
  getdetail: `http://${IP}//chzuHouse/queryHouseInfo/queryHouseImageInfo`,
  getInfo: `http://${IP}//chzuHouse/user/getUserInfo`,
  jump: `http://${IP}//chzuHouse/login/judgeUserInfo`,
  road: `http://${IP}//chzuHouse/accessibility/queryChzuServiceData`,
  usermanager: `http://${IP}//chzuHouse/login/getUser`,
  deleteUser: `http://${IP}//chzuHouse/login/delUser`,
  update: `http://${IP}//chzuHouse/login/manageMapperUpdateUser`,
  recommend: `http://${IP}/chzuHouse/recommended/houseRecommended`,
  compareHouseDetails: `http://${IP}/chzuHouse/queryHouseInfo/compareHouseDetails`,
  getCollectHouseInfo:`http://${IP}/chzuHouse/queryHouseInfo/getCollectHouseInfo`,
  delCollectHouse:`http://${IP}/chzuHouse/queryHouseInfo/delCollectHouse`,
  addCollectHouse:`http://${IP}/chzuHouse/queryHouseInfo/addCollectHouse`,
  getImageToCommunity:`http://${IP}/chzuHouse/queryImage/getMoreImageToIndoor`,
  getOneImageToCommunity:`http://${IP}/chzuHouse/queryImage/getOneImageToCommunity`,
  queryHouseInfoPoint:`http://${IP}/chzuHouse/queryHouseInfo/queryHouseInfoPoint`,
  getCollectHouseInfo: `http://${IP}/chzuHouse/queryHouseInfo/getCollectHouseInfo`,
  delCollectHouse: `http://${IP}/chzuHouse/queryHouseInfo/delCollectHouse`,
  addCollectHouse: `http://${IP}/chzuHouse/queryHouseInfo/addCollectHouse`,
  getlayers: `http://${IP}/chzuHouse/shapeDeal/dealShape`,
};