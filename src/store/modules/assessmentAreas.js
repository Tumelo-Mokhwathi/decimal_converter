//import Axios from "axios";
const action = {
  ClearResponse: context => {
    context.commit("SetCreateResponse", null);
  }
};

export default {
  action
};
