import React, { Component } from 'react';
import { Section } from './styledComponent'


export default class stealth extends Component {
    render() {
        return (
            <div>
                <Section>
                    <div>
                        <p>热销产品</p>
                        <ul className="hot">
                            <li>库博</li>
                            <li>美若康</li>
                            <li>ilens</li>
                            <li>博士伦</li>
                            <li>强生</li>
                            <li>视康</li>
                            <li>茵洛</li>
                            <li>实瞳</li>
                            <li>更多</li>
                        </ul>
                    </div>
                </Section>
                <Section>
                    <div>
                        <p>人气系列</p>
                        <ul className="popularity">
                            <li>ilens</li>
                            <li>美若康</li>
                            <li>茵洛</li>
                            <li>库博</li>
                            <li>强生</li>
                            <li>视康</li>
                            <li>库博</li>
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
                        <p>佩戴场合</p>
                        <ul className="adorn">
                            <li>外出游玩</li>
                            <li>商务职场</li>
                            <li>青春校园</li>
                            <li>逛街聚会</li>
                        </ul>
                    </div>
                </Section>
                <Section>
                    <div>
                        <p>镜片特点</p>
                        <ul className="trait">
                            <li>高透氧</li>
                            <li>散光</li>
                            <li>防UV</li>
                        </ul>
                    </div>
                </Section>
            </div>
        );
    }
}
