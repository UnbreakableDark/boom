import "./ZSpace.css"

/*
    该页面暂时废除
    原本打算在这里显示 测试数据/正常用户的全部信息，
    发现可以使用  antd的  <Drawer/> 抽屉效果实现，还省了一个页面
*/
function ZSpace(props){
    return(
        <div className="space-box">
            <header className="space-header">
                <h2>私人空间</h2>
                <p>这里可以看见你最私密的信息哦</p>
            </header>
           <div>关键信息(测试数据):</div>
           <table className="space-table">
            <th>
                <td>属性</td>
                <td>属性值</td>
            </th>
            <tr>
                <td>账号</td>
                <td>密码</td>
            </tr>
           </table>

        </div>
    )
}

export default ZSpace;