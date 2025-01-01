/* eslint-disable react/prop-types */
import { UserProvider } from './user'
import { HRProvider } from './hr'

function Contex(props) {
  return (
        <UserProvider>
          <HRProvider>
              {props.children}
          </HRProvider>
        </UserProvider>
  )
}

export default Contex