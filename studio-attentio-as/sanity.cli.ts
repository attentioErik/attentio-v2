import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '2liejo6a',
    dataset: 'production'
  },
  studioHost: 'attentio',
  deployment: {
    appId: 'ywmx8x3jg5sl8hykch33ro08',
    autoUpdates: true,
  }
})
