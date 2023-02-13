import React from 'react'
import PhaseItem from './PhaseItem'

function PhasesSection() {
    const phases = [
        {
            id: 1,
            title: 'Silent Launch & Webpage',
            description: [
                { text: "Launch Cats Token on the Arbitrum blockchain" },
                { text: "Release the Cats Token website, which will include information about the token, its team, and its vision" },
                { text: "Introduce Whiskers, the cat that fell in love with crypto and inspired the creation of Cats Token" },
            ]
        },
        {

            id: 2,
            title: 'Community Building & Listing on Decentralized Exchanges ',
            description: [
                { text: "Focus on growing the Cats Token community through social media and online forums. This will involve an incentive program where rewards are offered to top Shillers." },
                { text: "Build relationships with other crypto communities and collaborate on projects" },
                {
                    text: `List Cats Token on popular decentralized exchanges (DEXs) to increase accessibility and liquidity
            Partnerships with respected callers` },
            ]
        },
        {

            id: 3,
            title: 'Developing the Ecosystem',
            description: [
                { text: "Implement features that enhance the user experience and provide added value to the community" },
                { text: "Introduce new use cases and partnerships to increase the utility of Cats Token" },
                {
                    text: `Roll out a program to incentivize community members to refer new users to the Cats Token ecosystem`
                },
            ]
        },
        {

            id: 4,
            title: 'Charity & Giving Back',
            description: [
                { text: `Establish partnerships with animal shelters and rescue organizations to support and give back to the cat community.This will include working with cat - related startups, pet stores, and other relevant organizations.These partnerships will help increase the visibility and usage of Cats Token within the cat community.` },
                { text: `Donate fundings collected by the Cats Token to charity initiatives` },
                {
                    text: `Host fundraising events and campaigns to raise awareness and support for animal welfare causes`
                },
            ]
        },
        {

            id: 5,
            title: 'Mainstream Adoption & Expansion ',
            description: [
                { text: `Expand the Cats Token community to include cat enthusiasts from around the world` },
                { text: `Foster partnerships with companies and organizations that align with the Cats Token vision and mission` },
                {
                    text: `Explore new blockchain technologies and opportunities for growth and expansion`
                },
            ]
        }
    ]
    return (
        <div className='h-full max-w-screen-md mx-auto flex flex-col gap-16 font-inter'>
            {
                phases?.map((phase, key) => (
                    <PhaseItem id={phase.id} title={phase.title} description={phase.description} key={key} />
                ))
            }
        </div>
    )
}

export default PhasesSection