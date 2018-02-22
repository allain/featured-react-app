import React from 'react'

type Props = {
  name: string
}

class Portal extends React.Component<Props> {
  render(props) {
    console.log(props)
    return <span id={`portal-${name}`} />
  }
}

export default Portal
