import React from 'react';

const ChatPage = () => {

    const examples = [
        'This is an example.',
        'This is an example.',
        'This is an example.',
        'This is an example.',
        'This is an example.',
        'This is an example.',
    ]

    const chat = [
        {
            role : 'paitent',
            message : 'I want to know how saffron works.',
        },
        {
            role : 'assistant',
            message : 'Sure! We help to predict disease based on symptoms.',
        },
        {
            role : 'paitent',
            message : 'How to use Saffron?',
        },
        {
            role : 'assistant',
            message : 'You can enter symptom prompts, based on that we can predict disease and prescribe medicines.',
        },
    ]

    return (
        // <div>
        //     {/* <h1 className='text-3xl font-bold'>Chat Page</h1> */}
        //     
        // </div>
        
        <div className=' h-screen w-screen flex overflow-y-hidden overflow-x-hidden hide-scroll-bar'> 
        
            <div className=' w-[18%] p-4 bg-[#0C0015] border border-blue-500'>
                <button className=' w-full h-[50px] border rounded hover:bg-indigo-700'>+ New Chat</button>
            
            <div  className=' h-[75%] mt-8 overflow-scroll shadow-lg overflow-x-clip'>
                {
                [1, 2, 3, 4, 5, 6, 7, 9, 0, 1, 2, 3].map((item, index) => (
                    <div className=' py-3 text-center rounded mt-4 text--md font-light flex items-center px-3 hover:bg-slate-600 cursor-pointer'>
                        <span className='mx-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message-2" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M8 9h8" />
                                <path d="M8 13h6" />
                                <path d="M9 18h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-3l-3 3l-3 -3z" />
                            </svg>
                        </span>
                        My medical history
                    </div>
                ))
                }
                
            </div>
            </div>
            
           
            <div className=' w-[72%] '>
                {
                    (chat.length > 0) ? 
                    (
                        //
                        

                        <div className=' h-[80%] overflow-scroll hide-scroll-bar pt-8'>
                            
                            <div className='text-4xl font-bold mb-8 text-center'>Saffron</div>
                        {
                            
                        chat.map((item, index) => (
                        
                        <div className={`w-[68%] mx-auto p-4 text-white text--md font-light flex items-center ${item.role ==='assistant' && 'bg-slate-700 border border-blue-500 w-[63%] rounded-lg mr-25'}`}>
                            
                        <span className=' mr-8 p-2 bg-[#0C0015] text-white rounded-full '>
                        {
                        item.role === 'paitent' ?
                            (
                                <span className=''>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-heart" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
  <path d="M6 21v-2a4 4 0 0 1 4 -4h.5" />
  <path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z" />
</svg>
                                </span>
                            )
                        :
                            (<div className=''>
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message-chatbot" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
  <path d="M9.5 9h.01" />
  <path d="M14.5 9h.01" />
  <path d="M9.5 13a3.5 3.5 0 0 0 5 0" />
</svg>
                            </div>)
                            
                        }
                        </span>
                        <div>{item.message}</div>
                        </div>
                        //

                    ))
                    }
                    </div>
                    ):
                    (
                        <div className=' h-[80%] flex flex-col justify-center items-center'>
                            <div className='text-4xl font-bold mb-8 '>Saffron</div>
                            <div className=' flex flex-wrap justify-around max-w-[800px] '>
                                {
                                    examples.map((item, index) => (
                                        <div className='text-md font-light mt-4 p-4 border rounded-md cursor-pointer min-w-[320px] hover:bg-slate-800'> {item}</div>
                                    ))
                                }
                            </div>
                        </div>
                    )
                }
                
                <div className=' h-[20%] '>
                    <div className=' flex flex-col items-center justify-center w-full h-full text-white'>
                        <div className=' w-[68%] flex justify-center relative'>
                        <input type='text' className='w-full border border-blue-500 rounded-lg p-4 pr-14 bg-[#0C0015]' placeholder='Type your message here'/>
                        <span className='absolute right-5 top-4 cursor-pointer text-slate-400 hover:text-white'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-send" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M10 14l11 -11" />
                                <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
                            </svg>
                        </span>
                        </div>
                        
                        <small className='text-slate-500 mt-2'>Saffron helps predicting diseases and prescribes Ayurvedic medicines.</small>
                    </div>
                </div>I
            </div>

        </div>   
        

                );

            }

export default ChatPage;
