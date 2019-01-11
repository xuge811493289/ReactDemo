import axios from 'axios';
import {takeEvery} from 'redux-saga';
import {put} from 'redux-saga/effects';

function fetch(url){
  return axios.get(url);
}

function loadArticleList(){
  // 获取栏目
  let curl = "http://134.175.154.93:8089/index/findAllCategory";
  let category = yeild fetch(curl);

  // 查找栏目下的文章
  let cid = category.data.data[0].id;
  let aurl = "http://134.175.154.93:8089/index/findArticleById?categoryId="+cid;
  let article = yeild fetch(aurl);
}


//action-effort建立关系
function * rootSaga(){
  yeild takeEvery('LOAD_ARTICLE_LIST',loadArticleList);
}


export default rootSaga;



