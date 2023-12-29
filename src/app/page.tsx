import Hero from '@/components/hero'
import Ouractivities from '@/components/ouractivities'
import Welcome from '@/components/welcome'
import Programs from '@/components/Programs'
import Facilities from '@/components/facilities'

export default function Home() {
  return (
    <div className='px-4'>
      <Hero/>
      <Welcome/>
      <Ouractivities/>
      <Programs/>
      <Facilities/>
    </div>
  )
}
