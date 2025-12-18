function ProfileSection() {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-6 w-[64px] h-[64px] max-w-[64px] max-h-[64px] rounded-full overflow-hidden shrink-0">
        <img
          src="/images/profile.png"
          alt="David Thomason"
          className="w-full h-full max-w-full max-h-full object-cover rounded-full block"
        />
      </div>
      <h1 className="text-4xl font-bold text-gray-200 mb-4">David Thomason</h1>
      <p className="text-lg text-gray-400">Welcome to my website.</p>
      <p className="text-lg text-gray-400">I am a software engineer</p>
    </div>
  )
}

export default ProfileSection


