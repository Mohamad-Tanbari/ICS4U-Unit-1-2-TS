/*
 * This is a program that calculates joules produced by mass.
 *
 * @author Mohamad T
 * @version 1.0
 * @since 2024-9-23
 */

import { createPrompt } from 'bun-promptx'

// variables
const SPEED_OF_LIGHT = 2.998 * (10 ** 8)

// input
const massDictionary = createPrompt('Enter the mass of an object in kilograms: ')

if (massDictionary.value === null) {
  console.log('Invalid input; nulls not allowed.')
} else {
  // parse the value as a float
  const massString = massDictionary.value
  if (isNaN(parseFloat(massString))) {
    console.log('Invalid input; not a number.')
  } else {
    // process
    const mass = parseFloat(massString)
    const energy = mass * (SPEED_OF_LIGHT ** 2)

    // output
    console.log(`${mass}kg of mass would produce ${energy.toExponential()}J of energy.`)
  }
}

// done
console.log('\nDone.')
