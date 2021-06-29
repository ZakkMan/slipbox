# The Infinite Machine

## Meta Data

Source:  kindle 
Author: Camila Russo

## Highlights

### Highlights

- In 2008, five years before the idea of Ethereum materialized in a white paper, Bitcoin was created. But even Bitcoin didn’t appear in a vacuum. Cryptographers had been trying to come up with a private, peer-to-peer digital currency since at least the 1980s.
- Computer scientist David Chaum saw how the advent of electronic payments could threaten privacy and focused his research on ways to prevent that. He devised the “blind signatures” system, which enabled digital payments without having to disclose personal information, and used that technology to create eCash in 1983, an anonymous digital currency1. eCash wasn’t a fully decentralized system. It relied on banks to sign the digital currency, so it could still be susceptible to censorship and corruption. Still, Chaum’s innovation spearheaded what would become a movement.
- Hacker Jude Milhon, better known by her pseudonym St. Jude, combined the words “cypher” (a way to encrypt information) and “cyberpunk” (a science fiction subgenre that depicts high-tech worlds where society has broken down) to christen the emerging group as the “cypherpunks.” For cypherpunks, cryptography would be a tool to effect wider social and political change. Some of them even advocated for crypto-anarchy, a belief that cryptography would enable a world free from corporate or state control.
- As cypherpunks made headway, the open source software movement, which would also influence the development of blockchain technology, was growing.
- In 1983, Stallman responded by creating an operating system called GNU, which would be free and accessible to anyone. Next Stallman founded the Free Software Foundation and the GNU General Public License, which said anyone was free to use, copy, distribute, and modify software created under that license. The only requirement was that changes to the code had to be shared.
- In 1997, Eric S. Raymond published the essay “The Cathedral and the Bazaar,” comparing two software development models: the cathedral, where code development is restricted to an exclusive group of developers, and the bazaar, where code is public and developed over the internet.
- At around this time, in 1999, Napster launched.
- Then in 2001, BitTorrent was released, doing to movies and larger files what Napster had done with music. They arguably brought peer-to-peer (P2P) applications into the mainstream. Peer-to-peer networks interconnect equally privileged nodes with each other, allowing users to share and transfer data without the need of a centralized administrative entity. Systems using this architecture are resilient against censorship, attacks, and manipulation. Just like the mythological Hydra, there’s no one head that you can cut off to kill it, and it gets stronger after each attack.
- In the 1980s and 1990s there were key problems cypherpunks were trying to solve before they could get there.
- One is that digital coins, unlike cash, are just computer code that can easily be replicated and falsified. The problem, known as “double spend,” can be solved using a centralized entity that keeps a record on the coins and authenticates them, but the challenge was to transfer value without having to trust a third party.
- Another issue to address in peer-to-peer, pseudonymous systems was Sybil attacks. Just as coins can be replicated in a digital world, so can identities. This is a problem in a network of equal peers because an attacker could create a large number of pseudonymous identities to gain a disproportionately large influence.
- Researchers Cynthia Dwork and Moni Naor made the first break toward solving these problems when they invented the “proof-of-work” concept in 1993. Proof-of-work is aimed at deterring attacks or spam in a network by requiring the users of the service to do some work, so that it would be economically inviable to create useless or malicious data.
- Cryptographer Adam Back proposed a version of proof-of-work called Hashcash five years later, which used cryptographic hash functions to prove work had been done. In 1998, computer scientists Wei Dai came up with B-money and Nick Szabo invented Bit Gold. They both proposed schemes that allowed a network of users to transact with digital money without the need of intermediaries, but these were never implemented as they didn’t fully solve the double-spend and Sybil attack problems.
- Cypherpunks had continued incrementally improving past work until the major breakthrough came in October 2008, when an anonymous person or persons going by the name Satoshi Nakamoto emailed the group. “I’ve been working on a new electronic cash system that’s fully peer-to-peer, with no trusted third party,” the email began, and linked to a nine-page PDF that underlined how the system worked. He said he proposed solving the double-spend problem by using a “peer-to-peer network which timestamps transactions by linking them into an ongoing chain of hash-based proof-of-work.”
- In the paper titled “Bitcoin: A Peer-to-Peer Electronic Cash System,” Satoshi Nakamoto proposed a network of computers, where each computer holds the copy of the entire transaction history for the network, a ledger with what everyone owns. Anyone is free to download the ledger onto their computer and join the network. The full transaction history is open for anyone to see, but the users behind transactions are pseudonymous, only identified by their public keys, which are a jumble of letters and numbers. Only users control the private keys needed to access funds tied to their Bitcoin addresses, which are under their exclusive control. For the first time, people could genuinely be their own bank.
- When a transaction is executed, it is broadcast to all the computers in the network for them to update their ledgers. Transactions are bunched together to form a block of data, and once that block runs out of space (1 megabyte right now), computers race to solve a complex mathematical puzzle to verify the transactions, seal the block, and record it on their ledgers.
- This is done using a cryptographic hash function, which works like a magic scrambling machine where an input of any length spits out a group of letters and numbers of a fixed length. The computers, or nodes, use all the most recent, unconfirmed transactions as inputs in the hash function and try to combine them with arbitrary data in such a way that the result starts with a certain, specific number of zeros. This is very intense computing work and takes a lot of energy to do, but once one of the computers gets the answer, it’s easy for the rest to check. They just need to feed it into the hash function and verify that it spits out the answer with the required number of zeros. Once the nodes agree that the seal is valid, the block is recorded and linked to the previous block using the accepted hash, forming a chain of blocks, thus the name “blockchain.”
- The computer that solved the problem gets coins and a fee as a reward. Transaction fees have rarely surpassed $1—though they’ve jumped to almost $40 at their peak. This process, called “mining,” takes about ten minutes per block in the Bitcoin blockchain.
- Nick Szabo, the cryptographer who in 1998 invented the digital currency “Bit Gold,” coined the term “smart contract” in the early 1990s. In a 1997 paper, he said smart contracts “combine protocols with user interfaces to formalize and secure relationships over computer networks.” The system eliminates the need to pay for and trust third parties like auditors, accountants, lawyers, and notary publics, as the agreements are executed through a computer program. The humble vending machine is a primitive precursor to smart contracts, Szabo wrote in the paper.5
- Jeff Scott Ward
    - **Note:** Incredible story
- Ludwig von Mises’s laissez-faire magnum opus Human Action: A Treatise on Economics twice.
    - **Tags:** #read
    - **Note:** .read
- Irrational Exuberance.
    - **Tags:** #read
    - **Note:** .read
- Andreas M. Antonopoulos and Gavin Wood, Mastering Ethereum: Building Smart Contracts and Dapps
    - **Tags:** #read
    - **Note:** .read
- Delphi Digital, Thematic Insights: Decentralized Finance, March 2019, https://www.delphidigital.io/defi.
    - **Tags:** #read
    - **Note:** .read