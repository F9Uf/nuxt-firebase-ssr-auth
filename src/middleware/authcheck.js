export default ({store, redirect, error}) => {
    if(!store.getters.activeUser) {
        return redirect('/login')
    }
}