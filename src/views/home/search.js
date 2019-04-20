import React,{Component} from "react"
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';

class SearchBarExample extends React.Component {

  render() {
    return (<div style={{fontSize:"0.14rem"}}>
     
      <SearchBar placeholder="搜索/商品/品牌/类别" maxLength={8} />

    </div>);
  }
}
export default SearchBarExample