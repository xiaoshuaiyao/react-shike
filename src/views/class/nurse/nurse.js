import React, { Component } from 'react';
import { Section } from './styledComponent'


export default class nurse extends Component {
    render() {
        return (
            <div>
                <Section>
                    <div>
                        <p>护理液</p>
                        <ul className="hot">
                            <li>爱尔康</li>
                            <li>博士伦</li>
                            <li>视康</li>
                            <li>雅培</li>
                            <li>海昌</li>
                            <li>澜柏</li>
                            <li>沙福隆</li>
                            <li>卫康</li>
                            <li>科莱博</li>
                            <li>全能</li>
                            <li>艾爵</li>
                            <li>更多</li>
                        </ul>
                    </div>
                </Section>
                <Section>
                    <div>
                        <p>RGP硬镜护理</p>
                        <ul className="popularity">
                            <li>博士顿</li>
                            <li>美尼康</li>
                            <li>培克能</li>
                            <li>GRP</li>
                        </ul>
                    </div>
                </Section>
                <Section>
                    <div>
                        <p>眼部洗眼液</p>
                        <ul className="castoff">
                            <li>优能洗眼液</li>
                        </ul>
                    </div>
                </Section>
                <Section>
                    <div>
                        <p>润眼液</p>
                        <ul className="adorn">
                            <li>冰蓝</li>
                            <li>爱尔康</li>
                            <li>海昌</li>
                            <li>艾爵</li>
                        </ul>
                    </div>
                </Section>
                <Section>
                    <div>
                        <p>伴侣盒</p>
                        <ul className="adorn">
                            <li>holy nara</li>
                            <li>迪士尼</li>
                            <li>凯达</li>
                        </ul>
                    </div>
                </Section>
                <Section>
                    <div>
                        <p>人气搜索</p>
                        <ul className="adorn">
                            <li>促销装</li>
                            <li>原装进口</li>
                            <li>水润保湿</li>
                            <li>不含防腐剂</li>
                            <li>框架镜清洗液</li>
                        </ul>
                    </div>
                </Section>
            </div>
        );
    }
}
