function settingsComponent(props) {

  let button_click_text = 'Below button not yet clicked.'

  let onButtonClick = function(event) {
    button_click_text = 'Button was clicked ' + event.type
    props.settingsStorage.setItem('button_click', '')
  }

  let toggle_label = 'Toggle something: '
  // Toggle value is the string "true" or "false".
  let toggle_value = props.settingsStorage.getItem('toggle')
  if (toggle_value == "true") {
    toggle_label += 'on '
  } else {
    toggle_label += 'off'
  }

  let slider_text = 'Slider value: '
  let slider_value = props.settingsStorage.getItem('slider')
  if (!slider_value) {
    slider_text += 'disabled'
  } else{
    slider_text += slider_value + ' (seconds).'
  }

  return (
    <Page>
      <Section
        description={<Text italic align="right"> Italic Section Description with <Link source="https://dev.fitbit.com">a link</Link></Text>}
        title={<Text bold align="center">Demo Section Title</Text>}>

        <Text>
          This is a very basic <Text bold>demo settings</Text> page to show off some of the current
          capabilities of the <Text italic>Companion Settings</Text> library.
          For more info see
          <Link source="https://dev.fitbit.com/build/reference/settings-api/"> online docs</Link>
        </Text>

        <TextImageRow
          label="Example text and image"
          sublabel="With truncated text. I don't see the image in simulator. And what happens with a long text."
          icon="https://placekitten.com/g/100/100"
        />

      </Section>

      <Section
        description="Description for another section"
        title="Another simple section">


        <Text>
          {button_click_text}
        </Text>
        <Button
          label="Button"
          onClick={(event) => onButtonClick(event)}
        />


        <Text>
          Toggles will produce the string "true" and "false" and not boolean.
        </Text>

        <Toggle
          settingsKey="toggle"
          label={toggle_label}
        />

        <Slider
          label={slider_text}
          settingsKey="slider"
          min="0"
          max="120"
          step="15"
        />


        <Text>
          Text input will produce an object and not a plain string.
          {props.settingsStorage.getItem('text_input')}
        </Text>
        <TextInput
          title="Above Text Input"
          label="Example text input"
          placeholder="EMPTY Placeholder"
          action="Do it"
          settingsKey="text_input"
        />

        <ColorSelect
          centered={true}
          settingsKey="color"
          colors={[
            {color: 'tomato',     value: '1'},
            {color: 'sandybrown', value: '2'},
            {color: 'gold',       value: '3'},
            {color: 'aquamarine', value: '4'},
            {color: 'deepskyblue',value: '5'},
            {color: 'plum',       value: '6'},
            {color: 'tomato',     value: '7'},
            {color: 'sandybrown', value: '12'},
            {color: 'gold',       value: '13'},
            {color: 'aquamarine', value: '14'},
            {color: 'deepskyblue',value: '15'}
          ]}
          onSelection={(value) => console.log(value)}
        />


        <ColorSelect
          settingsKey="color_few"
          colors={[
            {color: 'tomato',     value: {align: 'left', number: '1'}},
            {color: 'sandybrown', value: {align: 'right', number: '2'}}
          ]}
        />


        <Select
          label={`Multi-Selection`}
          multiple
          settingsKey="multiselection"
          options={[
            {name:"One",   value:"1"},
            {name:"Two",   value:"2"},
            {name:"Three", value:"3"},
            {name:"Four", value:"4"},
            {name:"Five", value:"5"},
            {name:"Six", value:"6"},
            {name:"Seven", value:"7"},
            {name:"Eight", value:"8"},
            {name:"Nine", value:"9"},
            {name:"Ten", value:"10"},
            {name:"Eleven", value:"11"},
            {name:"Twelve", value:"12"},
            {name:"Thirteen", value:"13"},
            {name:"Fourteen", value:"14"},
            {name:"Fifteen", value:"15"}
          ]}
          renderItem={
            (option) =>
              <TextImageRow
                label={option.name}
                sublabel="Sub-Label"
                icon="https://tinyurl.com/ybbmpxxq"
              />
          }
          onSelection={(selection) => console.log(selection)}
        />


        <AdditiveList
          settingsKey="additive"
        />


        <AdditiveList
          title="A list of TextImageRow"
          settingsKey="select-list"
          maxItems="5"
          renderItem={
            ({ name, value }) =>
              <TextImageRow
                label={name}
                sublabel={value.location}
                icon={value.icon}
              />
          }
          addAction={
            <Select
              label="Add Item"
              options={[
                { name: 'Label1', required: true,  value: {location: 'Sub-Label', icon: 'https://tinyurl.com/ybbmpxxq'} },
                { name: 'Label2',                  value: {location: 'Sub-Label', icon: 'https://tinyurl.com/ybbmpxxq'} },
                { name: 'Label3', required: true,  value: {location: 'Sub-Label', icon: 'https://tinyurl.com/ybbmpxxq'} },
                { name: 'Label4',                  value: {location: 'Sub-Label', icon: 'https://tinyurl.com/ybbmpxxq'} },
                { name: 'Label5', required: false, value: {location: 'Sub-Label', icon: 'https://tinyurl.com/ybbmpxxq'} }
              ]}
            />
          }
        />


      <ImagePicker
        title="Image Picker"
        description="Pick an image to use in this app"
        label="Pick an Image"
        sublabel="Settings image picker"
        settingsKey="image"
        imageWidth="300"
        imageHeight="300"
      />


      </Section>

    </Page>
  );
}

registerSettingsPage(settingsComponent);
