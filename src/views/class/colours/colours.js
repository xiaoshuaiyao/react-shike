import React, { Component } from 'react';
import { Section } from './styledComponent'


export default class colours extends Component {
    render() {
        return (
            <div>
                <Section className="one">
                    <div>
                        <p>热销产品</p>
                        <ul className="hot">
                            <li>flanmy</li>
                            <li>领丽秀</li>
                            <li>美若康</li>
                            <li>博士伦</li>
                            <li>实瞳</li>
                            <li>强生</li>
                            <li>givre</li>
                            <li>新视野</li>
                            <li>茵洛</li>
                            <li>NEO</li>
                            <li>更多</li>
                        </ul>
                    </div>
                </Section>
                <Section>
                    <div>
                        <p>人气系列</p>
                        <ul className="popularity">
                            <li>爱谢</li>
                            <li>Femil</li>
                            <li>安目瞳</li>
                            <li>人鱼姬</li>
                            <li>强生</li>
                            <li>茵洛</li>
                            <li>实瞳</li>
                        </ul>
                    </div>
                </Section>
                <Section>
                    <div>
                        <p>抛弃周期</p>
                        <ul className="castoff">
                            <li>日抛</li>
                            <li>双周抛</li>
                            <li>月抛</li>
                            <li>半年抛</li>
                            <li>年抛</li>
                        </ul>
                    </div>
                </Section>
                <Section>
                    <div>
                        <p>花色</p>
                        <ul className="adorn">
                            <li>蕾丝</li>
                            <li>钻石</li>
                            <li>巨目</li>
                            <li>梦幻</li>
                            <li>双色</li>
                            <li>三色</li>
                        </ul>
                    </div>
                </Section>
                {/* <Section>
                    <div>
                        <p></p>
                        <ul className="adorn">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </Section>
                <Section>
                    <div>
                        <p></p>
                        <ul className="adorn">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </Section> */}
            </div>
        );
    }
}
