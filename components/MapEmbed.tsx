export default function MapEmbed({
  latitude,
  longitude,
  venueName,
  address,
}: {
  latitude: number | null
  longitude: number | null
  venueName: string | null
  address: string | null
}) {
  const hasCoords = latitude !== null && longitude !== null

  if (!hasCoords) {
    if (!address) return null
    return (
      <div className="border rounded-lg p-4">
        <h3 className="font-semibold mb-2">Location</h3>
        {venueName && <p className="font-medium">{venueName}</p>}
        <p className="text-gray-600">{address}</p>
      </div>
    )
  }

  const query = `${latitude},${longitude}`
  const src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`

  return (
    <div className="border rounded-lg overflow-hidden">
      <iframe
        src={src}
        width="100%"
        height="320"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="block"
      />
    </div>
  )
}