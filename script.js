module.exports = async function(context, commands) {
    await commands.navigate('https://www.thoughtworks.com');
    await commands.click.byClassName("search__button");
    await commands.addText.byId('Rebecca Parsons', 'search-bar-input')
    await commands.click.byClassNameAndWait('search-bar__button')

    await commands.measure.start('Profile Load');
    await commands.click.byXpathAndWait('//div[@class="search-result__link"]/a');    
    return commands.measure.stop();
  }
  
  