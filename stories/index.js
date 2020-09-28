import React from 'react'
import { storiesOf } from '@storybook/react'
import { Ring, Bar } from '../src'

storiesOf('Loaders', module)
    .add('Bar', () => <Bar />)
    .add('Ring', () => <Ring />)