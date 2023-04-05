const getters = {
    formatRole: (state) => {
        let role = ''
        switch (state.role) {
            case 0:
                role = '超级管理员'
                break
            case 1:
                role = '管理'
                break
            case 2:
                role = '普通用户'
                break
        }
        return role
    }
}

export default getters
