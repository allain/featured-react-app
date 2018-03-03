// @flow

import React from 'react'

type Props = {
  name: string,
  active: boolean
}

class Feature extends React.Component<Props> {
  render() {
    const { active, children, name } = this.props
    if (typeof active !== 'undefined' && !active) return null

    return <React.Fragment key={name}>{children}</React.Fragment>
  }
}

export default Feature
