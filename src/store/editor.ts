import {v4 as uuidv4} from 'uuid'
import {Module} from 'vuex';
import {GlobalDataProps} from '.';

export interface EditorProps {
    components: ComponentData[];
    currentElement: string;
}

export interface ComponentData {
    props: { [key: string]: unknown };
    id: string;
    name: string;
}

export const testComponents: ComponentData[] = [
    {id: uuidv4(), name: 'l-text', props: {text: 'hello', fontSize: '15px', color: 'red'}},
    {id: uuidv4(), name: 'l-text', props: {text: 'hello1', fontSize: '20px', fontWeight: 'bold'}},
    {
        id: uuidv4(),
        name: 'l-text',
        props: {text: 'hello2', fontSize: '25px'}
    },
]

const editor: Module<EditorProps, GlobalDataProps> = {
    state: {
        components: testComponents,
        currentElement: ''
    },
    mutations: {
        addComponent(state, props) {
            const newComponent: ComponentData = {
                id: uuidv4(),
                name: 'l-text',
                props
            }
            state.components.push(newComponent)
        },
        setActive(state, currentId: string) {
            state.currentElement = currentId
        }
    },
    getters: {
        getCurrentElement: (state) => {
            return state.components.find((component) => component.id === state.currentElement)
        }
    }
}

export default editor;