import React, { useState } from 'react'

export const useProjectDisplay = () => {

    const [display, setDisplay] = useState('grid')

    
  return {display, setDisplay}
}
