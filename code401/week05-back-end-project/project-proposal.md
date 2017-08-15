# Project Proposal - Network Diary

## User Stores
* I want to keep track of
  * who I meet during my job search
  * companies and jobs I'm interested in
  * jobs I've applied for
* I need it to be easy to use
* I need to be able to have private notes
* I'd like to interact with other networker's...

## Mongodb relationships
```
- Companies
  |-name
  |-notes
  |-linkedin-id
  |-glassdoor-id
Contacts
  |-name
  |-notes
  |-company-id
  |-linkedin-id
  |-meetings
    |-date
    |-notes
Favorites
  |-job
    |-linkedin-id
    |-glassdoor-id
  |-company
    |-linkedin-id
    |-glassdoor-id
Diary
  |-
```

## Third party APIs

### Glassdoor
* actions
  * job-stats
  * job-progression
  

Description | Sample URL
--|--
All companies | <http://api.glassdoor.com/api/api.htm?t.p=179789&t.k=cvywQG4Vk8s&userip=0.0.0.0&useragent=&format=json&v=1&action=employers>
All companies in Oregon | <http://api.glassdoor.com/api/api.htm?t.p=179789&t.k=cvywQG4Vk8s&userip=0.0.0.0&useragent=&format=json&v=1&action=employers&state=Oregon>
Company by ID | <>


### LinkedIn