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
                            <li></li>
                        </ul>
                    </div>
                </Section>
                <Section>
                    <div>
                        <p>人气系列</p>
                        <ul className="popularity">
                            <li></li>
                        </ul>
                    </div>
                </Section>
                <Section>
                    <div>
                        <p>抛弃周期</p>
                        <ul className="castoff">
                            <li></li>
                        </ul>
                    </div>
                </Section>
                <Section>
                    <div>
                        <p>佩戴场合</p>
                        <ul className="adorn">
                            <li></li>
                        </ul>
                    </div>
                </Section>
                <Section>
                    <div>
                        <p>镜片特点</p>
                        <ul className="trait">
                            <li></li>
                        </ul>
                    </div>
                </Section>
            </div>
        );
    }
}
