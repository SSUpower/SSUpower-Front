import React, { useState } from "react"

function LoginPage() {
    //이메일, 비밀번호 칸 비워두기
    const [Email, setEmail] = useState("") //eslint-disable-line no-unused-vars
    const [Password, setPassword] = useState("") //eslint-disable-line no-unused-vars

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)

    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        //사용자의 이메일, 비밀번호를 저장 
        console.log ('Email',Email)
        console.log ('Password',Password)

    }
    return (
        <div style={{ // 정렬
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', height:'100vh'
        }}>
        
            <form style = {{display: 'flex', flexDirection: 'column'}}
                onSubmit={onSubmitHandler}
            >
                <label>Email</label>
                <input type="email" value={Email} onChange={onEmailHandler} />

                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />

                <br />
                <button>
                    로그인  
                </button>
            </form>
        </div>
    )
}

export default LoginPage