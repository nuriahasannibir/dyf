'use client'

import { useState } from 'react'

export default function RegisterPage() {
  const [imagePreview, setImagePreview] = useState(null)
  const [bioCount, setBioCount] = useState(0)

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setImagePreview(URL.createObjectURL(file))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Registration Successful! Redirecting...')
    window.location.href = '/'
  }

  return (
    <main className="min-h-screen bg-[#F3E8FF] py-6 px-4 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-purple-100 p-6">
        
        <div className="text-center mb-6">
          <span className="text-xs font-semibold px-3 py-1 bg-purple-100 text-purple-700 rounded-full">
            ✨ Campus Community
          </span>
          <h1 className="text-2xl font-bold text-gray-900 mt-2">User Registration</h1>
          <p className="text-xs text-gray-500">Let's get to know you!</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Full Name *</label>
            <input type="text" required placeholder="Nuria Hasan" 
              className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:border-purple-600 focus:outline-none" />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Age (10-30) *</label>
            <input type="number" min="10" max="30" required placeholder="18" 
              className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:border-purple-600 focus:outline-none" />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">School / College Name *</label>
            <input type="text" required placeholder="Dhanbari Govt. College" 
              className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:border-purple-600 focus:outline-none" />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Address *</label>
            <input type="text" required placeholder="Dhanbari, Tangail" 
              className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:border-purple-600 focus:outline-none" />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Blood Group</label>
            <select className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:border-purple-600 focus:outline-none bg-white">
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option><option value="A-">A-</option>
              <option value="B+">B+</option><option value="B-">B-</option>
              <option value="AB+">AB+</option><option value="AB-">AB-</option>
              <option value="O+">O+</option><option value="O-">O-</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Profile Picture (Max 2MB)</label>
            <label className="flex flex-col items-center justify-center border-2 border-dashed border-purple-200 rounded-xl p-4 bg-purple-50/50 cursor-pointer">
              <span className="text-xs text-purple-600 font-semibold">Tap to upload photo</span>
              <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
            </label>
            {imagePreview && (
              <div className="mt-2 flex items-center gap-2">
                <img src={imagePreview} className="w-10 h-10 rounded-full object-cover border" alt="Preview" />
                <span className="text-xs text-green-600 font-medium">Photo attached!</span>
              </div>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Your Bio</label>
            <textarea maxLength="200" rows="2" placeholder="Tell us something about yourself..." 
              onChange={(e) => setBioCount(e.target.value.length)}
              className="w-full p-3 text-sm rounded-xl border border-gray-200 focus:border-purple-600 focus:outline-none"></textarea>
            <div className="text-right text-[10px] text-gray-400">{bioCount}/200</div>
          </div>

          <button type="submit" className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg text-sm">
            Submit Registration
          </button>
        </form>

      </div>
    </main>
  )
}