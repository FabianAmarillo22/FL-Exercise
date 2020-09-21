import React from 'react';
import { Divider } from 'semantic-ui-react';

import './HomeMainContent.css';

export default function HomeMainContent() {
    return (
        <div className='homeMainContent' style={{ backgroundColor:'#1b1c1d'}}>
            <p className='homeMainTitle'>Lorem Ipsum</p>
            <Divider className='homeDivider'/>
            <p className='homeMainText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat ligula eget sem mattis malesuada. Morbi sed arcu porta, vulputate quam a, ornare felis. Maecenas feugiat ultrices magna, eu cursus eros mattis sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras sollicitudin ullamcorper molestie. Maecenas nibh neque, tincidunt ut eros dictum, ullamcorper lacinia leo. Praesent sagittis suscipit metus, non porta urna convallis vitae. Integer tincidunt urna eget dignissim convallis. Sed varius tellus id aliquam elementum. Nunc vehicula, felis sed elementum euismod, ipsum odio ultricies velit, non mollis metus dui vitae enim. Donec interdum faucibus enim at euismod. Cras at nisl et tortor suscipit elementum. Quisque congue lectus sit amet imperdiet porttitor. Aenean sit amet lorem id nibh rutrum tincidunt eu ut lacus. Quisque tempor turpis lacinia, consequat nisi pharetra, auctor velit.</p>
            <Divider className='homeDivider'/>
        </div>
    )
}
