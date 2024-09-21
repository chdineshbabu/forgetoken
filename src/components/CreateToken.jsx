'use client'
import { useState } from 'react'
import { Coins, Image as ImageIcon, AlertCircle,X } from "lucide-react"

export default function CreateComponent({onClose}) {
  const [metadata, setMetadata] = useState({
    name: '',
    symbol: '',
    description: '',
    image: '',
  })
  const [error, setError] = useState('')
  const [jsonOutput, setJsonOutput] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setMetadata(prev => ({ ...prev, [name]: value }))
    setError('')
  }

  const validateInputs = () => {
    if (!metadata.name.trim()) {
      setError('Token name is required.')
      return false
    }
    if (!metadata.symbol.trim()) {
      setError('Token symbol is required.')
      return false
    }
    if (metadata.symbol.length > 10) {
      setError('Token symbol must be 10 characters or less.')
      return false
    }
    if (!metadata.description.trim()) {
      setError('Token description is required.')
      return false
    }
    if (!metadata.image.trim()) {
      setError('Image URL is required.')
      return false
    }
    return true
  }

  const handleCreateToken = () => {
    if (validateInputs()) {
      const jsonMetadata = JSON.stringify(metadata, null, 2)
      setJsonOutput(jsonMetadata)
      console.log('Token metadata:', jsonMetadata)
      onClose()
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
    <div className="max-w-2xl mx-auto p-12 bg-lLight dark:bg-lBlack rounded-lg shadow-md">
      <div className="mb-6 flex space-x-8 justify-between">
        <h2 className="text-2xl  font-bold flex items-center gap-2">
          <Coins className="h-6 w-6" />
          Create Solana Token
        </h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-900 dark:hover:text-white"><X /></button>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Token Name</label>
          <input
            id="name"
            name="name"
            value={metadata.name}
            onChange={handleInputChange}
            placeholder="Enter token name"
            className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-white focus:border-white sm:text-sm dark:bg-gray-700"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="symbol" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Token Symbol</label>
          <input
            id="symbol"
            name="symbol"
            value={metadata.symbol}
            onChange={handleInputChange}
            placeholder="Enter token symbol (max 10 characters)"
            maxLength={10}
            className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-white focus:border-white sm:text-sm dark:bg-gray-700"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
          <textarea
            id="description"
            name="description"
            value={metadata.description}
            onChange={handleInputChange}
            placeholder="Enter token description"
            className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-white focus:border-white sm:text-sm dark:bg-gray-700"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="image" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Image URL</label>
          <input
            id="image"
            name="image"
            value={metadata.image}
            onChange={handleInputChange}
            placeholder="Enter image URL"
            className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-white focus:border-white sm:text-sm dark:bg-gray-700"
          />
        </div>
        {error && (
          <div className="mt-4 p-4 bg-red-100 text-red-700 border border-red-300 rounded-md flex items-center">
            <AlertCircle className="mr-2 h-5 w-5" />
            <div>
              <p className="font-semibold">Error</p>
              <p>{error}</p>
            </div>
          </div>
        )}
      </div>
      <div className="mt-6">
        <button 
          onClick={handleCreateToken} 
          className="w-full px-4 py-2 rounded-lg bg-black hover:bg-white hover:text-black hover:scale-105 items-center transition-all delay-75 dark:hover:text-white dark:hover:bg-black   dark:bg-slate-200 text-white dark:text-black  text-lg flex justify-center"
        >
          Create Token
          <ImageIcon className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>
    </div>
  )
}
