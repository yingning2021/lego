import { createStore } from 'vuex'
import editor, { EditorProps } from './editor';
import templates, { TemplatesProps } from './templates'
import user, { UserProps } from './user'


export interface GlobalDataProps {
  user: UserProps;
  templates: TemplatesProps;
  editor: EditorProps;
}

const store = createStore({
  modules: {
    user,
    templates,
    editor
  }
})

export default store
