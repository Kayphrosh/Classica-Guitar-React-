import React from 'react'
import './objectives.css'
function Objectives() {
 const objectives = [
    {
        id: 1,
        text: "To promote and support Classical Guitar Music Education in Nigeria and enhancing our communities with musical performance from diverse Nigerian cultures.",

    },
    {
        id: 2,
        text: "To promote performing Classical Guitarists and also setting a standard to support their artistry through public and private performances.",

    },
    {
        id: 3,
        text: "Providing support for Classical Guitar music Students within their community through our outreach program.",

    },
    {
        id: 4,
        text: "With continued growth and funding, we wish to implement a scholarship program for those pursuing Classical Guitar music Education in Nigeria.",

    },
    {
        id: 5,
        text: "A tiered Multicultural concert series and festival for the Classical Guitar which started, 2019 will be developed to promote and support Nigeria and Africa diverse Cultures and folk music.",
    },
    {
        id: 6,
        text: "The society will also be a central resource for people to find independent Teachers for the Classical  Guitar, and Performers for special events.",
    },
    {
        id: 7,
        text: "Our success will be measured by how well we promote the appreciation of the Classical Guitar Artistry in the Nation, also how well we enhance and promote Nigerian culture, more so, Africa Unity through Classical Guitar Music.",
    }

 ]

  return (
    <section class="objectives-container">
        <header>
            <h3>
                Our Objectives
            </h3>
        </header>
        
        <main class="objectives">

                {objectives.map((objective, idx) => {
                    return (
                        <div class="objective">
                            <h4>{objective.id}</h4>
                            <p>{objective.text}</p>
                        </div>
                    )
                })}
        </main>
    </section>
  )
}

export default Objectives;