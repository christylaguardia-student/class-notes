# Wed Aug 2

_Quiz tomorrow!_

## Aggregation Pipeline

in robo 3t, run these

```
db.getCollection('restaurants').aggregate([
    { $match: { borough: "Bronx" } },
])

db.getCollection('restaurants').aggregate([
    { $group: { _id: "$borough" } }
])

db.getCollection('restaurants').aggregate([
    { $group: {
        _id: "$borough",
        count: { $sum: 1 }
    } }

])

db.getCollection('restaurants').aggregate([
    { $match: { _id: ObjectId("59823a751cd824610aeaeb4a") } },
    { $unwind: '$grades' },
    { $group: {
        _id: '$_id',
        name: { $first: '$name' },
        borough: { $first: '$borough' },
        min: { $min: '$grades.score' },
        max: { $max: '$grades.score' },
        avg: { $avg: '$grades.score' }
    } }

])

db.getCollection('restaurants').aggregate([
    { $group: {
        _id: '$borough',
        cuisines: { $push: '$cuisine' }
    } }

])

db.getCollection('restaurants').aggregate([
    { $group: {
        _id: {
            borough: '$borough',
            cuisine: '$cuisine'
        },
        count: { $sum: 1 }
    }},
    { $project: {
        id: '$_id.borough',
        borough: 1,
        cuisines: {
            cuisine: '$_id.cuisine',
            count: '$count'
        }
    }},
    { $group: {
        _id: '$_id',
        cuisines: { $push: '$cuisines' }
    }}

])

db.getCollection('restaurants').aggregate([
    { $unwind: '$grades' },
    { $group: {
        _id: '$_id',
        name: { $first: '$name' },
        borough: { $first: '$borough' },
        min: { $min: '$grades.score' },
        max: { $max: '$grades.score' },
        avg: { $avg: '$grades.score' }
    } },
    { $sort: { avg: -1 } },
    { $limit: 10 }

])

```