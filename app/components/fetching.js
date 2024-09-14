import { createBucketClient } from '@cosmicjs/sdk'

const cosmic = createBucketClient({
  bucketSlug: 'tersicore-v2-tersicore',
  readKey: 'XfrOLrgYlSBJNqtbOuf0jqjYQ5WRUZRtQGiEW2c6rpT5R95A7J',
})

export async function getData() {
  const currentDate = new Date().toISOString().slice(0, 10)
  const data = await cosmic.objects.find({
    type: "appuntamenti",
    'metadata.data':{
      $gte: currentDate,
    },
  }).props(["id", "title", "metadata"]).sort('metadata.data')
 
  return data.objects
}