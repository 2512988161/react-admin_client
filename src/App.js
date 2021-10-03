//应用的根组件
import React,{Component} from "react"//只要定义组件必须引入
import { Button ,message } from 'antd'

export default class App extends Component{

    info1 = () => {
        message.info('This is a normal message');
      }

    render()//渲染
    {

        return <Button type="primary" onClick={this.info1}  >Primary Button</Button>//创建虚拟DOM对象

    }
}