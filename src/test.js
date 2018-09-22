import React from 'react'
import { mount } from 'enzyme'
import DataTable from './'

const columns = [
  'one', 'two', 'three'
]

const data = [
  ['a', 'b', 'c']
]

describe('DataTable', () => {
  describe('when columns prop is array', () => {
    it('should render Table Headings', () => {
      const wrapper = mount(
        <DataTable columns={columns} data={data} />
      )
      expect(wrapper.find('th').length).toBe(3)
      wrapper.unmount()
    })
  })

  describe('when columns prop isn\'t provided', () => {
    it('should not render Table Headings', () => {
      const wrapper = mount(
        <DataTable data={data} />
      )
      expect(wrapper.find('th').length).toBe(0)
      wrapper.unmount()
    })
  })

  describe('when data prop is array', () => {
    it('should render Table Body', () => {
      const wrapper = mount(
        <DataTable columns={columns} data={data} />
      )
      expect(wrapper.find('tbody').length).toBe(1)
      wrapper.unmount()
    })
  })
})
