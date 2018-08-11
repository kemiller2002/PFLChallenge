import * as React from 'react';


export default class Cursor extends React.Component {
        constructor(props : any){
            super (props)

            // this.update();
        }

        public update () {
            const text = "Hello World".split('');
            const delay = 10;
            let progress = text.map(c => '.').join('');
            console.log(progress)
            // this.setState({text:progress})

            const delayFn = (onSuccess: ((b:boolean) => void)) => {
                
                console.log(progress)
                if(text.length > 0){
                    console.log(progress.length + ' - (' + text.length + ')')
                    const sliceLength = progress.length - text.length

                    console.log(sliceLength)
                    progress = progress.slice(0, sliceLength) + text.shift() + progress.slice(sliceLength, progress.length - 1)
                    console.log(progress.length)
                    this.setState({text:progress})

                    setTimeout(delayFn, delay);
                }
                else {
                    onSuccess(true);
                }
                // alert(text);
            }

            setTimeout(delayFn, delay);
            return new Promise((onSuccess, onFail) =>{
                delayFn(onSuccess);
            });
        }

        public render () {
            const text = (this.state as any || {"text" : ""}).text
            return <div>{text}</div>
        }
}