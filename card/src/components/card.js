import React, { PureComponent } from 'react'

export default class card extends PureComponent {
    render() {
        return (
            <div className='body'>
                <div className='card'>
                    <div className='img'>
                        <img src="./images/profile.jpg" alt="" />
                    </div>
                    <div className='content'>
                    <div className='details'>
                        <div className='name'>
                            <h2>Anglina Smith <br /><span>UI/UX Designer</span></h2>
                        </div>
                        <div className='data'>
                            <h3>350 <br /><span>Posts</span></h3>
                            <h3>131K <br /><span>Following</span></h3>
                            <h3>23 <br /><span>Following</span></h3>
                        </div>
                        <div className='btns'>
                            <button> Follow</button>
                            <button> Message</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
