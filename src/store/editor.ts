import  {v4 as uuidv4} from 'uuid'
import { Module } from 'vuex';
import { GlobalDataProps } from '.';

export interface EditorProps {
    components: ComponentData[];
    currentElement: string;
}

interface ComponentData { 
    props: {[key: string]: unknown};
    id: string;
    name: string;
}

export const testComponents: ComponentData[] =  [
    {id: uuidv4(), name: 'l-text', props: {text: 'hello', fontSize: '15px', color: 'red'}},
    {id: uuidv4(), name: 'l-text', props: {text: 'hello1', fontSize : '20px', fontWeight: 'bold'}},
    {id: uuidv4(), name: 'l-text', props: {text: 'hello2', fontSize: '25px', actionType: 'url', url: 'https://www.baidu.com'}},
]

const editor: Module<EditorProps, GlobalDataProps> = {
    state: {
        components: testComponents,
        currentElement: ''
    }
}

export default editor;