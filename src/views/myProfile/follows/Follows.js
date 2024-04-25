import React from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormCheck,
  CListGroup,
  CListGroupItem,
  CRow,
} from '@coreui/react'
import { useDispatch, useSelector } from 'react-redux'
import { DocsExample } from '../../../components'
import { useNDK } from '@nostr-dev-kit/ndk-react'
import { nip19 } from 'nostr-tools'
import { updateNpub } from '../../../redux/features/siteNavigation/slice'

const Follows = () => {
  const { getProfile } = useNDK()
  const dispatch = useDispatch()
  const myName = useSelector((state) => state.profile.name)
  const aFollows = useSelector((state) => state.profile.kind3.follows)

  const myNpub = 'npub1u5njm6g5h5cpw4wy8xugu62e5s7f6fnysv0sj0z3a8rengt2zqhsxrldq3'
  const foo = getProfile(myNpub)?.name

  const setCurrentNpub = (newNpub) => {
    console.log('setCurrentNpub: ' + newNpub)
    dispatch(updateNpub(newNpub))
  }
  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Follows</strong>
            </CCardHeader>
            <CCardBody>
              <DocsExample href="components/list-group/#links-and-buttons">
                <CListGroup>
                  {aFollows.map((pubkey, item) => {
                    const npub = nip19.npubEncode(pubkey)
                    const name = getProfile(npub)?.name
                    return (
                      <CListGroupItem
                        key={item}
                        as="a"
                        href="#/profile"
                        onClick={() => setCurrentNpub(npub)}
                      >
                        {name} - {npub}
                      </CListGroupItem>
                    )
                  })}
                </CListGroup>
              </DocsExample>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <h1>Follows</h1>
      <div>myName: {myName}</div>
      <div>aFollows.length: {aFollows.length}</div>
    </>
  )
}

export default Follows
