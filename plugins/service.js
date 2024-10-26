import { NotificationService } from '../services/NotificationService'

export default ({ store, $fire }, inject) => {
      
  // inject the service, making it available in the context, component, store, etc.
  inject('notification', new NotificationService(store.state.authUser, $fire))
}