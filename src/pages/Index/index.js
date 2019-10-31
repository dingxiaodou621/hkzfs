import React from 'react'
import { Carousel } from 'antd-mobile'
class Index extends React.Component {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176
      }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                data: [
                    'AiyWuByWklrrUDlFignR',
                    'TekJlZRVCjLFexlOCuWn',
                    'IJOtIlfsYdTyaDTRVrLI'
                ]
            })
          }, 100)
    }
    render() {
        return (
            <div>
                {/* 轮播图

                    先写数据，再写页面
                    先写页面div+css,再写数据ajax
                */}
                <Carousel autoplay={true} infinite>
                    {this.state.data.map(val => (
                    <a
                        key={val}
                        href="http://www.alipay.com"
                        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                    >
                    <img
                        src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                        alt=""
                        style={{ width: '100%', verticalAlign: 'top' }}
                        // 图片高度自适应（js的知识）
                        onLoad={() => {
                        // window event resize -> 为窗口设置resize->窗口大小改变时
                        window.dispatchEvent(new Event('resize'));
                        this.setState({ imgHeight: 'auto' });
                        }}
                    />
                    </a>
          ))}
        </Carousel>
                {/* 导航 (4个) */}

                {/* 租房小组-宫格菜单(4个) */}

                {/* 导航-搜索 */}
            </div>
        )
    }
}
export default Index