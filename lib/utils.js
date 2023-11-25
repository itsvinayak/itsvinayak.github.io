import axios from "axios";

const fetchData = async (url) => {
  try {
    const res = await axios(url);
    const { data } = res;
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default fetchData;