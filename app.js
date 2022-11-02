const packages = [{
    priorityLevel: 'express',
    isFragile: false,
    weight: 2,
    to: 'Bobby Brown',
    trackingNumber: '123qcp'
},
{
    priorityLevel: 'standard',
    isFragile: true,
    weight: .5,
    to: 'Takeoff',
    trackingNumber: '4201flae'
},
{
    priorityLevel: 'standard',
    isFragile: true,
    weight: .5,
    to: 'Joe Mamma',
    trackingNumber: 'jffd147'
},
{
    priorityLevel: 'free',
    isFragile: false,
    weight: 4,
    to: 'Calvin Thurston',
    trackingNumber: 'p00oo0'
},
{
    priorityLevel: 'express',
    isFragile: false,
    weight: 6,
    to: 'Derek Wallace',
    trackingNumber: '992frog'
},
{
    priorityLevel: 'standard',
    isFragile: false,
    weight: 5,
    to: 'Hannah Schulman',
    trackingNumber: '8081baz'
},
{
    priorityLevel: 'free',
    isFragile: true,
    weight: 12,
    to: 'Leslie Bishop',
    trackingNumber: 'suz2367'
}]



function drawPackages() {
    let taggedPackages = document.getElementById('taggedp')
    let template = ''
    packages.forEach(package => { template += `<div class = "col-12 text-left"><h2> ${package.to} ${package.trackingNumber} </h2></div>` })

    taggedPackages.innerHTML = template
    console.log(taggedPackages)
}

function filterHeavy() {
    let heavyPackages = packages.filter(package => package.weight > 4)
    console.log(heavyPackages)
    drawtPackages(heavyPackages)
}

function filterPriority(priorityLevel) {
    let expressPackages = packages.filter(package => package.priorityLevel == priorityLevel)
    drawtPackages(expressPackages)
}

function filterFragile() {
    let fragilePackages = packages.filter(package => package.isFragile == true)
    drawtPackages(fragilePackages)
}

function drawtPackages(package) {
    let taggedPackages = document.getElementById('taggedp')
    let template = ""
    package.forEach(ps => template += `<div class = "col-12"><h2> ${ps.to} ${ps.trackingNumber} </h2></div>`)
    taggedPackages.innerHTML = template
}

function drawallPackages() {
    drawtPackages(packages)
}