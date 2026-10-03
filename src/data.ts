import winGroupLogo from './assets/win-group.png'
import winWingsLogo from './assets/win-wings.png'
import airportsCateringLogo from './assets/airports-catering.png'
import winEuropeLogo from './assets/win-europe.png'

export type Company = {
  id: string
  name: string
  role: string
  location: string
  owner: string
  description: string
  logo: string
}

export const companies = {
  winGroup: {
    id: 'win-group',
    name: 'WIN GROUP',
    role: 'Regional Holding Company',
    location: 'Dubai, United Arab Emirates',
    owner: '100% owned by WIN HOLDING',
    description:
      'Our regional platform in the Middle East, overseeing the group’s aviation and airport services operations.',
    logo: winGroupLogo,
  },
  winEurope: {
    id: 'win-europe',
    name: 'WIN EUROPE',
    role: 'Local Company',
    location: 'Ljubljana, Slovenia',
    owner: '100% owned by WIN HOLDING',
    description: 'Our European operating company, delivering quality, trusted services to partners across the EU.',
    logo: winEuropeLogo,
  },
  winWings: {
    id: 'win-wings',
    name: 'WIN WINGS',
    role: 'Local Company',
    location: 'Belgrade, Serbia',
    owner: 'Owned by WIN GROUP',
    description: 'Aviation services company supporting airlines and travellers — serving the world above the sky.',
    logo: winWingsLogo,
  },
  airportsCatering: {
    id: 'airports-catering',
    name: 'International Airports Catering',
    role: 'Local Company',
    location: 'Belgrade, Serbia',
    owner: 'Owned by WIN GROUP',
    description: 'Airport and in-flight catering, bringing consistent quality and food-safety standards to every flight.',
    logo: airportsCateringLogo,
  },
} satisfies Record<string, Company>

export const offices = [
  { label: 'Head Office', city: 'London', country: 'United Kingdom', code: 'UK', address: 'Vauxhall, Wandsworth, SW8 2GB' },
  { label: 'Regional Office', city: 'Dubai', country: 'United Arab Emirates', code: 'AE', address: 'Business Gate Centre, 212560' },
  { label: 'Operations', city: 'Belgrade', country: 'Serbia', code: 'RS', address: 'WIN Wings · International Airports Catering' },
  { label: 'Operations', city: 'Ljubljana', country: 'Slovenia', code: 'SI', address: 'WIN Europe' },
]

export const contact = {
  email: 'ahmed.farouk@winholding.win',
  website: 'www.winholding.win',
}
