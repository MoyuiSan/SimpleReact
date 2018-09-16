export function counter(state = { count: 0, name: '逗比' }, action) {
    const count = state.count
    const name = state.name
    switch (action.type) {
        case 'increase':
            return { count: count + 1, name: action.text }
        case 'increase2':
            if (count <= 0) {
                return { count: 0, name: "你是猪!" }
            }
            return { count: count - 1, name: action.text }

        default:
            return state
    }
}