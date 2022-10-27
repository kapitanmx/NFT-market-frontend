import React, {useState} from 'react';
import {Wrapper, Content, UploadBox} from './Uploader.styles';

const Uploader = () => {
    const [data, setData] = useState({});
    const handleInput = () => {}
    const handleSubmit = () => {}
    return (
        <Wrapper>
            <Content>
                <form onSubmit={handleSubmit}>
                    <UploadBox
                        type="file"
                        onChange={handleInput} 
                    />
                    <input 
                        type='submit'
                    />
                </form>
            </Content>
        </Wrapper>
    );
}
export default Uploader;