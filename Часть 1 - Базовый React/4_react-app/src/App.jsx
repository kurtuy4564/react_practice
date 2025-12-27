import Clock from './clock/Clock'
import Profile from './profile/Profile'
import StoryTray from './story-tray/StoryTray'

function App() {
  const time = new Date('2024-01-15T23:59:59.999Z')

  return (
    <>
      <Clock time={time} />

      <Profile
        person={{
          imageId: 'lrWQx8l',
          name: 'Subrahmanyan Chandrasekhar',
        }}
      />
      <Profile
        person={{
          imageId: 'MK3eW3A',
          name: 'Creola Katherine Johnson',
        }}
      />

      <StoryTray
        stories={[
          {
            id: 'create',
            label: 'Create Story',
          },
        ]}
      />
    </>
  )
}

export default App
