jQuery(function() {
  jQuery('.ArtistImage').css('opacity', 0.5)
  //jQuery('.artistText').css('display', 'none')
  jQuery('.artistText').hide()

  jQuery('.ArtistImage').on('mouseover', function() {
    jQuery(this).fadeTo('opacity', 1)
  })
  jQuery('.ArtistImage').on('mouseleave', function() {
    jQuery(this).fadeTo('opacity', 0.5)
  })
  jQuery('.ArtistImage').on('click', function() {
    jQuery('.artistText').show()
  })
  jQuery('.ArtistImage').on('click', function() {
    jQuery(this).css('border', '5px solid #ffff00')
  })
})
